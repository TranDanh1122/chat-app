export default function LocalLoading({ classname }: { classname?: number }) {
    return <div className={`${classname} border-s-2 border-white size-5 animate-spin rounded-full`}></div>
}