import { memo } from "react"

const Child2 = memo(({ content }) => {
    console.log("Child2 component is rendering")
    return (
        <div>{content}</div>
    )
})

export default Child2