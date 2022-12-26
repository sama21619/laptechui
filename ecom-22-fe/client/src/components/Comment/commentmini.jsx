import { CameraFill, PersonFill, CaretUpFill,} from 'react-bootstrap-icons';
import moment from 'moment';
function Commentmini({comment}) {
    return ( 
        <div>
            { (
                <div className="user my-8">
                <div>
                    <i>
                        <PersonFill className="text-4xl" />
                    </i>
                    &nbsp;
                    <strong>{`${comment.username}`}</strong>
                  
                </div>
                <p>{comment.content}</p>
              
               
                
                <p className="text-gray-400">
                    {moment(comment?.createdAt).format('HH:MM MM/DD, YYYY')}
                </p>
            </div>
            )}
     
        {/* {item?.creator?.replyforId !== null && commen.map(item2 => {if(item.creator.replyforId===item2.id){
            commen.sort((a,b)=>a.creator.replyforId - b.creator.replyforId)
            console.log(commen)
            return (
                <div className="admin bg-gray-100 p-4 my-4 border border-gray-200 relative">
                    <i className="absolute top-0 -translate-y-3/4 text-gray-100">
                        <CaretUpFill className="text-5xl" />
                    </i>
                    <div>
                        <i>
                            <PersonFill className="text-4xl" />
                        </i>
                        &nbsp;
                        <strong>{item2?.creator?.name}</strong>&emsp;
                        {item2?.creator?.admin && (<b className="bg-yellow-400 rounded px-2">Quản trị viên</b>)}
                        
                    </div>
                    <p>{item?.content}</p>
                    <span
                        className="text-blue-400 cursor-pointer"
                        onClick={() => handleReply(item2?.id)}
                    >
                        Trả lời
                    </span>
                    &emsp;
                    <span className="text-blue-400">Hài lòng</span>&emsp;
                    <span className="text-blue-400">Không hài lòng</span>&emsp;
                    <span className="text-gray-400">{moment(item?.createdAt).format('HH:MM MM/DD, YYYY')}</span>
                </div>
            )
        }})} */}
    </div>
     );
}

export default Commentmini;