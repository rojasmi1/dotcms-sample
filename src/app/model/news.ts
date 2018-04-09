export default class News {
  identifier: string;
  title: string;
  sysPublishDate: Date;
  imageContentAsset: string;
  story: string;

  constructor(
    identifier: string,
    title: string,
    sysPublishDate: Date,
    imageContentAsset: string,
    story: string) {
      this.identifier = identifier;
      this.title = title;
      this.sysPublishDate = sysPublishDate;
      this.imageContentAsset = imageContentAsset;
      this.story = story;
  }
}