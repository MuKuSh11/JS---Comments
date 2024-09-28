const commentInput = document.getElementById("comment-textarea");
const commentBtn = document.getElementById("comment-button");

const commentContainer = document.querySelector(".comments-container");

commentBtn.addEventListener("click", () => {
    let commentValue = commentInput.value.trim();
    commentInput.value = "";
    
    if( commentValue ) {
        addComment(commentValue);
    }
});

commentContainer.addEventListener("click", (e) => {
    const clickedBtn = e.target;
    const targetComment = clickedBtn.parentElement.parentElement;
    if( clickedBtn.classList.contains("reply-button") ) {
        addReply(targetComment);
    } else if ( clickedBtn.classList.contains("delete-button")) {
        targetComment.remove();
    } else if (clickedBtn.classList.contains("reply-delete-button")) {
        clickedBtn.parentElement.remove();
    }
});

function addComment(commentValue) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
        <p>${commentValue}</p>
        <div class="reply-container">
        </div>
        <textarea placeholder="Reply here..."></textarea>
        <div class="comment-btn-container">
            <button class="reply-button">Reply</button>
            <button class="delete-button">Delete</button>
        </div>
    `;
    commentContainer.appendChild(commentDiv);
}

function addReply(targetComment) {
    const replyTextArea = targetComment.querySelector("textarea");
    let replyValue = replyTextArea.value.trim();
    replyTextArea.value = "";
    if(replyValue) {
        const replyTag = document.createElement("p");
        replyTag.innerHTML = `
            ${replyValue} <button class="reply-delete-button">Delete Reply</button>
        `;
        targetComment.querySelector(".reply-container").appendChild(replyTag);
    }
}