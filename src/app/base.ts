export abstract class BaseRender {
  renders = 0;
  render() {
    return ++this.renders;
  }
}
