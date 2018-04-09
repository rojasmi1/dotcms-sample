export default class News {
  identifier: string;
  title: string;
  sysPublishDate: Date;

  constructor(
    identifier: string,
    title: string,
    sysPublishDate: Date) {
      this.identifier = identifier;
      this.title = title;
      this.sysPublishDate = sysPublishDate;
  }
}