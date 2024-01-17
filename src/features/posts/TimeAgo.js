import { parseISO, formatDistanceToNow } from "date-fns";



const TimeAgo = ({timestamp}) => {

    let timeAgo  =""
    if (timestamp){
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <spam title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
    </spam>
  )
}

export default TimeAgo