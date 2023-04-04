export default function Message({messageText}){
    return(
        <div>
            <h3 data-testid="messageId">it is {messageText} message</h3>
        </div>
    )
}
Message.defaultProps={
    messageText:'successes'
}