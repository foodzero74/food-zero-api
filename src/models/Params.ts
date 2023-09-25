import mongoose from 'mongoose';

const ParamsSchema = new mongoose.Schema({
    backgroundMenu: String,
    backgroundAbout: String,
    backgroundContact: String,
    backgroundBlog: String,
    backgroundCover: String,
    address: String,
    phone: String,
    email: String,
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
    titleCommentsHome: String,
    homeSection1Title: String,
    homeSection1Subtitle: String,
    homeSection1Paragraph1: String,
    homeSection1Paragraph2: String,
    homeSection1Image1: String,
    homeSection1Image2: String,
    homeSection1ImagesText1: String,
    homeSection1ImagesText2: String,
    homeSection2Title: String,
    homeSection2Subtitle: String,
    homeSection2ButtonText: String,
    homeSection3Title: String,
    homeSection3Paragraph: String,
    homeSection3Image1: String,
    homeSection3Image2: String,
    homeSection3Image3: String,
    homeSectionMenuTitle: String,
    homeSectionMenuSubtitle: String,
    menuSectionTitle: String,
    menuSectionSubtitle: String,
    blogSectionTitle: String,
    blogSectionSubtitle: String,
    backgroundBlogDetail: String,
    blogDetailCommentTitle: String,
    contactSectionTitle: String,
    contactSectionSubtitle: String,
    aboutSectionTitle: String,
    aboutSectionParagraph: String,
    aboutBannerVideoTitle: String,
    aboutBannerVideoParagraph: String,
    aboutBannerVideoId: String,
    aboutHeaderSectionTitle: String,
    aboutHeaderSectionParagraph: String,
    aboutHeaderSectionImage: String,
    contactCover1: String,
    contactCover2: String,
}, { collection: 'params' });


export const ParamsModel = mongoose.model('Params', ParamsSchema); 
