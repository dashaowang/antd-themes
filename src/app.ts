export const qiankun = {
  // 应用加载之前
  async bootstrap(props: unknown): Promise<void> {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: unknown): Promise<void> {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: unknown): Promise<void> {
    console.log('app1 unmount', props);
  },
};
