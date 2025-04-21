

export default function Canvas(){
    const data = {
        svg: `
            hi
        `
    }
    return(
        <div className=" ">
            <div dangerouslySetInnerHTML={{__html: data.svg}} />
        </div>
    )
}