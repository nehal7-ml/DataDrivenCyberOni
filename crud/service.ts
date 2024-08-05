import {
  Service,
  PrismaClient,
  Prisma,
  Image,
  Tag,
  SubService,
  ServiceDescription,
  FAQ,
  CaseStudy,
} from "@prisma/client";
import {
  create as createTag,
  connectOrCreateObject as connectTags,
} from "./tags";
import { CreateImageDTO, CreateSubServiceDTO, CreateTagDTO } from "./DTOs";
import { createObject as createImageObject } from "./images";
import {
  create as createSubService,
  update as updateSubService,
  updateSubServiceObject,
} from "./subService";
import prisma from "@/lib/prisma";
import { HttpError } from "@/lib/utils";

export type CreateServiceDTO = {
  title: string;
  previewContent: string;
  featured: boolean;
  ServiceDescription: CreateServiceDescription[];
  hourlyRate: number;
  valueBrought: string[];
  skillsUsed: string[];
  htmlEmbed?: string;
  image?: CreateImageDTO;
  SubServices?: CreateSubServiceDTO[];
  tags?: CreateTagDTO[];
  faqs?: CreateFaqDTO[];
};

export type CreateServiceDescription = {
  id?: string;
  title: string;
  content: string;
  imageOnLeft: boolean;
  image: CreateImageDTO;
};
export type CreateFaqDTO = {
  question: string;
  answer: string;
};

export type DisplayServiceDTO = Service & {
  image?: Image;
  tags?: Tag[];
  SubServices?: (SubService & { image: Image })[];
  ServiceDescription?: (ServiceDescription & { image: Image })[];
  CaseStudies?: CaseStudy[];
};

async function create(service: CreateServiceDTO, prismaClient: PrismaClient) {
  const services = prismaClient.service;

  let createdservice = await services.create({
    data: {
      title: service.title,
      featured: service.featured,
      previewContent: service.previewContent,
      hourlyRate: service.hourlyRate,
      valueBrought: service.valueBrought,
      skillsUsed: service.skillsUsed,
      htmlEmbed: service.htmlEmbed,
      image: service.image
        ? service.image.id
          ? { connect: { id: service.image.id } }
          : { create: service.image }
        : {},
      tags: connectTags(service.tags!, []),
      faqs: {
        create: service.faqs ? service.faqs : [],
      },
    },
    include: {
      SubServices: true,
      image: true,
      tags: true,
      ServiceDescription: {
        include: {
          image: true,
        },
      },
    },
  });

  if (service.SubServices && service.SubServices?.length > 0) {
    for (const subService of service.SubServices) {
      const newSubService = await createSubService(
        subService,
        createdservice.id,
        prismaClient,
      );
    }
  }

  if (service.ServiceDescription && service.ServiceDescription?.length > 0) {
    for (let description of service.ServiceDescription) {
      await prisma.serviceDescription.create({
        data: {
          ...description,
          image: description.image.id
            ? { connect: { id: description.image.id } }
            : { create: description.image },
          service: { connect: { id: createdservice.id } },
        },
      });
    }
  }

  return createdservice;
}

async function update(
  serviceId: string,
  service: CreateServiceDTO,
  prismaClient: PrismaClient,
) {
  const services = prismaClient.service;
  const oldService = await services.findUnique({
    where: { id: serviceId },
    include: {
      SubServices: true,
      image: true,
      ServiceDescription: {
        include: {
          image: true,
        },
      },
      faqs: true,
      tags: true,
    },
  });

  if (!oldService) throw HttpError(404, "Service not found");
  let image = await createImageObject(service.image);

  // let currentService = await services.findUnique({ where: { id: serviceId } })
  let updatedService = await services.update({
    where: { id: serviceId },
    data: {
      title: service.title,
      featured: service.featured,
      previewContent: service.previewContent,
      hourlyRate: service.hourlyRate,
      valueBrought: service.valueBrought,
      skillsUsed: service.skillsUsed,
      htmlEmbed: service.htmlEmbed,
      image:
        image && image.id
          ? {
            update: {
              where: {
                id: image.id,
              },
              data: image,
            },
          }
          : image && image?.id == null
            ? { create: image }
            : {},
      tags: connectTags(service.tags || [], oldService.tags),
      SubServices: await updateSubServiceObject(
        service.SubServices as CreateSubServiceDTO[],
        oldService?.SubServices as CreateSubServiceDTO[],
      ),
      ServiceDescription: await updateServiceDescriptionObject(
        service.ServiceDescription,
        oldService?.ServiceDescription as CreateServiceDescription[],
      ),
    },
    include: {
      SubServices: true,
      image: true,
      tags: true,
      ServiceDescription: true,
    },
  });

  return updatedService;
}
async function remove(serviceId: string, prismaClient: PrismaClient) {
  const services = prismaClient.service;
  const existingservice = await services.findUnique({
    where: { id: serviceId },
  });
  if (existingservice) {
    await services.delete({
      where: { id: serviceId },
      include: { SubServices: true, ServiceDescription: true, image: true },
    });
  }
}
async function read(serviceId: string, prismaClient: PrismaClient) {
  const services = prismaClient.service;
  const existingservice = await services.findUnique({
    where: { id: serviceId },
    include: {
      SubServices: {
        include: {
          image: true,
          CaseStudies: true,
        },
      },
      ServiceDescription: {
        include: {
          image: true,
        },
      },
      image: true,
      tags: true,
      CaseStudies: true,
    },
  });
  if (existingservice) return existingservice;
}

async function getServicesByName(
  serviceName: string,
  prismaClient: PrismaClient,
) { }

async function getServicesByTag(tag: string, prismaClient: PrismaClient) { }

async function getAll(
  page: number,
  pageSize: number,
  prismaClient: PrismaClient,
) {
  const services = prismaClient.service;

  if (pageSize !== 10 && pageSize != 30 && pageSize !== 50 && pageSize !== 0)
    throw new Error("page size must be 10, 30 or 50");

  let allServices = await services.findMany({
    skip: page === 0 ? 0 : (page - 1) * pageSize,
    take: page === 0 ? 9999 : pageSize,
    where: {},
    include: {
      image: true,
      tags: true,
      SubServices: true,
      CaseStudies: true,
    },
    orderBy: {},
  });

  const totalCount = await services.count();
  const totalPages = Math.ceil(totalCount / pageSize);

  return { records: allServices, currentPage: page, totalPages, pageSize };
}

export async function getFeatured(prisma: PrismaClient) {
  const services = prisma.service;
  const records = await services.findMany({
    where: { featured: true },
    take: 5,
    orderBy: { hourlyRate: "desc" },
    include: {
      tags: true,
      image: true,
      CaseStudies: true,
    },
  });
  return records;
}

export async function getRecent(prisma: PrismaClient) {
  const caseStudies = prisma.service;
  let allRecords = await caseStudies.findMany({
    take: 10,
    where: {
      featured: { equals: true },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return allRecords;
}

export async function getBySearchTerm(
  search: string,
  page: number,
  prisma: PrismaClient,
) {
  const services = prisma.service;
  const searchQuery = {
    OR: [
      {
        title: {
          contains: search,
        },
      },

      {
        ServiceDescription: {
          some: {
            content: {
              contains: search,
            },
          },
        },
      },

      {
        SubServices: {
          some: {
            OR: [
              {
                description: {
                  contains: search,
                },
              },
              {
                title: {
                  contains: search,
                },
              },
              {
                serviceDeliverables: {
                  array_contains: search,
                },
              },
              {
                tags: {
                  some: {
                    name: {
                      contains: search,
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        tags: {
          some: {
            name: {
              contains: search,
            },
          },
        },
      },
    ],
  }
  const data = await prisma.$transaction([prisma.service.count({ where: searchQuery }), prisma.service.findMany({
    skip: (page - 1) * 10,
    take: 10,
    where: searchQuery,
    orderBy: {
      createdAt: 'desc',
    }
  })]);

  return {records: data[1], totalPages: Math.ceil(data[0] / 10)};
}

async function updateServiceDescriptionObject(
  descriptions: CreateServiceDescription[],
  oldDescriptions: CreateServiceDescription[],
) {
  let createOrUpdateOrDelete: {
    create: any[];
    update: any[];
    delete: any[];
  } = {
    create: [],
    update: [],
    delete: [],
  };
  for (const oldDescription of oldDescriptions) {
    const toUpdate = descriptions.find(
      (description) => description.id === oldDescription.id,
    );

    if (toUpdate) {
      const image = await createImageObject(toUpdate.image);

      createOrUpdateOrDelete.update.push({
        where: {
          id: toUpdate.id,
        },
        data: {
          title: toUpdate.title,
          content: toUpdate.content,
          imageOnLeft: toUpdate.imageOnLeft,
          image:
            image && image.id
              ? {
                update: {
                  where: {
                    id: image.id,
                  },
                  data: image,
                },
              }
              : image && image?.id == null
                ? { create: image }
                : {},
        },
      });
    } else {
      createOrUpdateOrDelete.delete.push({ id: oldDescription.id });
    }
  }

  for (const description of descriptions) {
    if (!description.id) {
      const image = await createImageObject(description.image);

      createOrUpdateOrDelete.create.push({
        title: description.title,
        content: description.content,
        imageOnLeft: description.imageOnLeft,
        image: image ? { create: image } : {},
      });
    }
  }

  return createOrUpdateOrDelete;
}

export { create, update, remove, read, getAll };
