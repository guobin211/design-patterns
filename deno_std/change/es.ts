const deps: Record<string, any> = {}

class HomePage {
  __data: Record<string, unknown>

  data: Record<string, unknown>

  constructor() {
    this.data = {
      name: "HomePage"
    }
    this.__data = {}

    const timer = setTimeout(() => {
      this.data.name = "changed"
    }, 500);
  }

  render() {
    for (const [key, value] of Object.entries(this.data)) {
      console.log(key, value);
    }
  }
}

function makeReactive(component: HomePage) {
  deps["HomePage"] = component
  for (const key in component.data) {
    if (component.data.hasOwnProperty(key)) {
      component.__data[key] = component.data[key]
      Object.defineProperty(component.data, key, {
        get(): any {
          return component.__data[key]
        },
        set(v: any) {
          component.__data[key] = v
          deps["HomePage"].render()
        }
      })
    }
  }
}

const homePage = new HomePage()
const reactiveHomePage = makeReactive(homePage)
