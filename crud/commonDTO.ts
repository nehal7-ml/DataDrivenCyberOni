import { Event, GptPrompt, Service } from "@prisma/client";
import { DisplayBlogDTO } from "./blog";
import { displayProductDTO } from "./product";
import { DisplayUserDTO } from "./user";

export type GetAllRecordsDTO = {
    records: DisplayUserDTO[] | displayProductDTO[] | DisplayBlogDTO[] | Service[] | Event[] | GptPrompt[];
    currentPage: number,
    totalPages: number;
    pageSize: number;
}

export type RecordDTO = {
    record: DisplayUserDTO | displayProductDTO | DisplayBlogDTO | Service | Event | GptPrompt;
}