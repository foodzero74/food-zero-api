import { Request } from 'express';

export enum ErrorType {
    CREATE_PARAMS = 'You must be logged in to create params.',
    UPDATE_PARAMS = 'You must be logged in to update params.',
    CREATE_BLOG = 'You must be logged in to create a blog post.',
    UPDATE_BLOG = 'You must be logged in to update a blog post.',
    UPDATE_CATEGORY = 'You must be logged in to update a category.',
    CREATE_CATEGORY = 'You must be logged in to create a category.',
    CREATE_PRODUCT = 'You must be logged in to create a product.',
    UPDATE_PRODUCT = 'You must be logged in to update a product.',
    DELETE_SCHEDULE = 'You must be logged in to delete an schedule.',
    CREATE_SCHEDULE = 'You must be logged in to create an schedule.',
    UPDATE_SCHEDULE = 'You must be logged in to update an schedule.',
    NOT_FOUND_CATEGORY = 'Category not found.',
    NOT_FOUND_PRODUCT = 'Product not found.',
    NOT_FOUND_SCHEDULE = 'Schedule not found.',
    NOT_FOUND_FOOD_SPEC = 'Food spec not found.',
    NOT_FOUND_MEAT_PROCESS = 'Meat process not found.',
    NOT_FOUND_BLOG = 'Blog post not found.',
    INVALID_TOKEN = 'Invalid token.',
    OVERLAP_SCHEDULE = 'Schedule overlaps with an existing schedule.',
    NOT_FOUND_STAFF = 'Staff not found.',
    CREATE_STAFF = 'You must be logged in to create a staff member.',
    UPDATE_STAFF = 'You must be logged in to update a staff member.',
    DELETE_STAFF = 'You must be logged in to delete a staff member.',
    UNDELETE_STAFF = 'You must be logged in to activate a staff member.',
    CREATE_FOOD_SPEC = 'You must be logged in to create a food spec.',
    UPDATE_FOOD_SPEC = 'You must be logged in to update a food spec.',
    DELETE_FOOD_SPEC = 'You must be logged in to delete a food spec.',
    DELETE_MEAT_PROCESS = 'You must be logged in to delete a meat process.',
    CREATE_MEAT_PROCESS = 'You must be logged in to create a meat process.',
    UPDATE_MEAT_PROCESS = 'You must be logged in to update a meat process.',
}

export interface CreateStaffInput {
    name: string;
    description: string;
    image: string;
    role: string;
    disabled?: boolean;
}

export interface UpdateStaffInput {
    id: string;
    name?: string;
    description?: string;
    image?: string;
    role?: string;
    disabled?: boolean;
}


export type CreateCategoryInput = {
    name: String;
    description: String;
    image: String;
};

export interface CreateScheduleInput {
    name: string;
    openTime: string;
    closeTime: string;
}

export interface UpdateScheduleInput {
    id: string;
    name?: string;
    openTime?: string;
    closeTime?: string;
}

export interface CreateProductInput {
    name: string;
    description?: string;
    price: number;
    image: string;
    priority: number;
    categories: string[];
}

export interface UpdateCategoryInput {
    id: string;
    name?: string;
    description?: string;
    image?: string;
    disabled?: boolean;
}

export interface UpdateProductInput {
    id: string;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    priority?: number;
    categories?: string[];
    disabled?: boolean;
}

export type User = {
    uid: string;
};

export type GraphQLContext = {
    req: Request;
    user?: User;
};

export interface CreateFoodSpecInput {
    image: string;
    title: string;
    content: string;
}

export interface UpdateFoodSpecInput {
    id: string;
    image?: string;
    title?: string;
    content?: string;
}

export interface CreateMeatProcessInput {
    image: string;
    name: string;
    description: string;
    order: number;
}

export interface UpdateMeatProcessInput {
    id: string;
    image?: string;
    name?: string;
    description?: string;
    order?: number;
}

export interface CreateBlogInput {
    image: string;
    title: string;
    content: string;
    slug: string;
}

export interface UpdateBlogInput {
    id: string;
    image?: string;
    title?: string;
    content?: string;
    slug?: string;
    disabled?: boolean;
}

export interface UpdateBlogStateInput {
    id: string;
    disabled: boolean;
}

export interface CreateCommentInput {
    blogId: string;
    content: string;
    name: string;
}

export interface CreateCommentHomeInput {
    comment: string;
    name: string;
    stars: number;
}

export interface CreateParamInput {
    backgroundMenu: string;
    backgroundAbout: string;
    backgroundContact: string;
    backgroundBlog: string;
    backgroundCover: string;
    address: string;
    phone: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    titleCommentsHome: string;
    homeSection1Title: string;
    homeSection1Subtitle: string;
    homeSection1Paragraph1: string;
    homeSection1Paragraph2: string;
    homeSection1Images: string[];
    homeSection1ImagesText1: string;
    homeSection1ImagesText2: string;
    homeSection2Title: string;
    homeSection2Subtitle: string;
    homeSection2ButtonText: string;
    homeSection3Title: string;
    homeSection3Paragraph: string;
    homeSection3Images: string[];
    homeSectionMenuTitle: string;
    homeSectionMenuSubtitle: string;
    menuSectionTitle: string;
    menuSectionSubtitle: string;
    blogSectionTitle: string;
    blogSectionSubtitle: string;
    backgroundBlogDetail: string;
    blogDetailCommentTitle: string;
    contactSectionTitle: string;
    contactSectionSubtitle: string;
    aboutSectionTitle: string;
    aboutSectionParagraph: string;
    aboutBannerVideoTitle: string;
    aboutBannerVideoParagraph: string;
    aboutBannerVideoId: string;
    aboutHeaderSectionTitle: string;
    aboutHeaderSectionParagraph: string;
    aboutHeaderSectionImage: string;
    contactCover1: string;
    contactCover2: string;
}

export interface UpdateParamInput {
    id: string;
    backgroundMenu: string;
    backgroundAbout: string;
    backgroundContact: string;
    backgroundBlog: string;
    backgroundCover: string;
    address: string;
    phone: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    titleCommentsHome: string;
    homeSection1Title: string;
    homeSection1Subtitle: string;
    homeSection1Paragraph1: string;
    homeSection1Paragraph2: string;
    homeSection1Images: string[];
    homeSection1ImagesText1: string;
    homeSection1ImagesText2: string;
    homeSection2Title: string;
    homeSection2Subtitle: string;
    homeSection2ButtonText: string;
    homeSection3Title: string;
    homeSection3Paragraph: string;
    homeSection3Images: string[];
    homeSectionMenuTitle: string;
    homeSectionMenuSubtitle: string;
    menuSectionTitle: string;
    menuSectionSubtitle: string;
    blogSectionTitle: string;
    blogSectionSubtitle: string;
    backgroundBlogDetail: string;
    blogDetailCommentTitle: string;
    contactSectionTitle: string;
    contactSectionSubtitle: string;
    aboutSectionTitle: string,
    aboutSectionParagraph: string,
    aboutBannerVideoTitle: string,
    aboutBannerVideoParagraph: string,
    aboutBannerVideoId: string,
    aboutHeaderSectionTitle: string;
    aboutHeaderSectionParagraph: string;
    aboutHeaderSectionImage: string;
    contactCover1: string;
    contactCover2: string;
}

