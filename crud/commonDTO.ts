import { Event, GptPrompt, Service } from "@prisma/client";
import { DisplayBlogDTO } from "./blog";
import { displayProductDTO } from "./product";
import { displayUserDTO } from "./user";

export type GetAllRecordsDTO = {
    records:  displayUserDTO[] |  displayProductDTO[] | DisplayBlogDTO[] | Service[] | Event[] | GptPrompt[]  ;
    currentPage: number,
    totalPages: number;
    pageSize: number;
}

export type RecordDTO = {
    record: displayUserDTO |  displayProductDTO | DisplayBlogDTO | Service | Event | GptPrompt;
}