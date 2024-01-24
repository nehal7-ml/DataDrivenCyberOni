import { Event, GptPrompt, Service } from "@prisma/client";
import { displayProductDTO } from "./product";
import { DisplayBlogDTO, DisplayUserDTO } from "./DTOs";

export type GetAllRecordsDTO = {
    records: DisplayUserDTO[] | displayProductDTO[] | DisplayBlogDTO[] | Service[] | Event[] | GptPrompt[];
    currentPage: number,
    totalPages: number;
    pageSize: number;
}

export type RecordDTO = {
    record: DisplayUserDTO | displayProductDTO | DisplayBlogDTO | Service | Event | GptPrompt;
}