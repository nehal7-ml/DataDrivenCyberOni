import { Event, GptPrompt, Service } from "@prisma/client";
import { displayBlogDTO } from "./blog";
import { displayProductDTO } from "./product";
import { displayUserDTO } from "./user";

export type GetAllRecordsDTO = {
    records:  displayUserDTO[] |  displayProductDTO[] | displayBlogDTO[] | Service[] | Event[] | GptPrompt[]  ;
    currentPage: number,
    totalPages: number;
    pageSize: number;
}

export type RecordDTO = {
    record: displayUserDTO |  displayProductDTO | displayBlogDTO | Service | Event | GptPrompt;
}