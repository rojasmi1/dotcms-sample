export default class News {
  identifier: string;
  title: string;
  sysPublishDate: string;

  constructor(
    identifier: string,
    title: string,
    sysPublishDate: string) {
      this.identifier = identifier;
      this.title = title;
      this.sysPublishDate = sysPublishDate;
  }
}