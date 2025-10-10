import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { annotate } from "rough-notation"

function Highlighter({
    children,
    action = "highlight",
    color = "#ffd1dc",
    strokeWidth = 1.5,
    animationDuration = 1700,
    iterations = 2,
    padding = 2,
    multiline = false, // false for inline text
    isView = false,
}) {
    const elementRef = useRef(null)
    const annotationRef = useRef(null)

    const isInView = useInView(elementRef, { once: true, margin: "-10%" })
    const shouldShow = !isView || isInView

    useEffect(() => {
        if (!shouldShow) return

        const element = elementRef.current
        if (!element) return

        const annotation = annotate(element, {
            type: action,
            color,
            strokeWidth,
            animationDuration,
            iterations,
            padding,
            multiline,
        })

        annotationRef.current = annotation
        annotation.show()

        const resizeObserver = new ResizeObserver(() => {
            annotation.hide()
            annotation.show()
        })

        resizeObserver.observe(element)

        return () => {
            annotationRef.current?.remove()
            resizeObserver.disconnect()
        }
    }, [
        shouldShow,
        action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
    ])

    return <span ref={elementRef} className="relative inline-block">{children}</span>
}

export default Highlighter