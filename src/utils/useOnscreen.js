import {useState,useEffect,useRef} from 'react'

export function useOnScreen (options) {
    const ref = useRef(null)
    const [visible,setVisible] = useState(false)
    const currentRef = ref.current
    useEffect(()=> {
    const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
            }, options);
        if (currentRef) {
            observer.observe(currentRef)
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
                }
        }
},[ref, options,currentRef])
return [ref, visible]
}
