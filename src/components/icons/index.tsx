const TriangleIcon = ({color}:{color:string}) => {
    return (
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1818 16.7667H1.11811C0.296863 16.7667 -0.0705017 15.7363 0.56553 15.2167L18.6293 0.461733C19.1997 -0.00422931 20.0553 0.401654 20.0553 1.13822V15.8932C20.0553 16.3756 19.6642 16.7667 19.1818 16.7667Z" fill={color || "#FF2F2F"} />
        </svg>

    )
}