//your JS code here. If required.
document.getElementById("code-1").focus()
function handleInput(element, event) {
      if (event.inputType === 'deleteContentBackward' && element.previousElementSibling) {
        // On backspace, move focus to the previous input
        element.previousElementSibling.focus();
      } else if (element.nextElementSibling) {
        // On input, move focus to the next input
        element.nextElementSibling.focus();
      }
    }