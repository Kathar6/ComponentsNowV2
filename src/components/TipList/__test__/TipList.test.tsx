import '@testing-library/jest-dom'
import { render } from "@testing-library/react"

// Components
import TipList from "@src/components/TipList"
import { Icon } from "@iconify/react"

describe("Should validate all the tests", () => {
  it("Should show the component", () => {
    const {container} = render(
      <TipList>
        <Icon icon="fa6-solid:display"/>
      </TipList>
    )

    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
  })

  it("Should show 2 items", () => {
    const {container} = render(
      <TipList>
        <Icon icon="fa6-solid:display"/>
        <Icon icon="fa6-solid:display"/>
      </TipList>
    )
    expect(container.children[0].children.length).toEqual(2)
  })
})