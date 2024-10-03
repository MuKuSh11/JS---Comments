const commentInput = document.getElementById("comment-textarea");
const commentBtn = document.getElementById("comment-button");

const commentContainer = document.querySelector(".comments-container");

// add click 
commentBtn.addEventListener("click", () => {
    let commentValue = commentInput.value.trim();
    commentInput.value = "";
    
    if( commentValue ) {
        addComment(commentValue);
    }
});

commentContainer.addEventListener("click", (e) => {
    const clickedBtn = e.target;
    const targetCommentOrReply = clickedBtn.parentElement.parentElement;
    if( clickedBtn.classList.contains("reply-button") ) {
        const replyTextArea = clickedBtn.parentElement.previousElementSibling;
        if( !replyTextArea.style.display ) {
            replyTextArea.style.display = 'inline-block';
        } else {
            const replyValue = replyTextArea.value.trim();
            replyTextArea.value = "";
            if( replyValue ) {
                addReply(replyValue, targetCommentOrReply);
            }
            replyTextArea.style.display = '';
        }
    } else if ( clickedBtn.classList.contains("delete-button")) {
        targetCommentOrReply.remove();
    } else if ( clickedBtn.classList.contains("collapse-button")) {
        if( clickedBtn.classList.contains("fa-caret-up") ) {
            clickedBtn.classList.remove("fa-caret-up");
            clickedBtn.classList.add("fa-caret-down");
            collapseReplySection(targetCommentOrReply, true);
        } else {
            clickedBtn.classList.remove("fa-caret-down");
            clickedBtn.classList.add("fa-caret-up");
            collapseReplySection(targetCommentOrReply, false);
        }
    };
});

// Function to add comment in comments-container
function addComment(commentValue) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
        <p>${commentValue}</p>
        <div class="reply-container"></div>
        <textarea placeholder="Reply here..."></textarea>
        <div class="comment-btn-container">
            <button class="reply-button">Reply</button>
            <button class="delete-button">Delete</button>
            <button class="collapse-button fa-solid fa-caret-up"></button>
        </div>
    `;
    commentContainer.appendChild(commentDiv);
}

// Function to add all level replies in reply-container
function addReply(replyValue, targetCommentOrReply) {
    const replyDiv = document.createElement("div");
    replyDiv.classList.add("reply")
    replyDiv.innerHTML = `
        <p>${replyValue}</p>
        <div class="reply-container"></div>
        <textarea placeholder="Reply here..."></textarea>
        <div class="reply-btn-container">
            <button class="reply-button">Reply</button>
            <button class="delete-button">Delete</button>
            <button class="collapse-button fa-solid fa-caret-up"></button>
        </div>
    `;
    targetCommentOrReply.querySelector(".reply-container").appendChild(replyDiv);
}

function collapseReplySection(targetCommentOrReply, flag) {
    const replyContainer = targetCommentOrReply.querySelector(".reply-container");
    if( replyContainer.hasChildNodes()) {
        if( flag ) {
            replyContainer.style.display = "none";
        } else {
            replyContainer.style.display = "flex";
        }
    }
}