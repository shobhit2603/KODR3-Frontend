import { memo } from "react"

const Child1 = memo(({ content }) => {
    console.log("Child1 component is rendering")
    return (
        <div>{content}</div>
    )
})

export default Child1