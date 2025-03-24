interface Props {
    title: string,
    time: string
}
export default function Item({ title, time }: Props) {
    return <div className="flex items-center gap-4 p-3">
        <img loading="lazy" src="/assets/23.png" alt={title} className="object-cover w-28 h-24 rounded-xl" />
        <div className="flex-1">
            <h2 className="line-clamp-2 text-ellipsis overflow-hidden text-white/95">{title}</h2>
            <div className="flex items-center gap-3 mt-3.5">
                <img src="/assets/avt_group.png" alt="avatar group" className="object-cover w-14 h-5" />
                <time className="text-sm text-white/50">{time}</time>
            </div>
        </div>
    </div>
}