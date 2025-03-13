import { useNavigate } from "react-router-dom"

export const useTurnBack = () => {
    const naviagte = useNavigate()
    return () => {
        if (window.history.length > 2) {
            naviagte(-1)
        } else {
            naviagte("/")
        }
    }
}