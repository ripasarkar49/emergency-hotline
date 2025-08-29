### 6. Answer the following questions clearly:

1.  What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    Ans: *getElementById-
    Selects one element by its id.
    Returns a single element or null.
    *getElementsByClassName-
    Selects all elements with a given class name.
    Returns an HTMLCollection (live list).
    *querySelector-
    Selects the first element that matches a CSS selector.
    Returns a single element or null.  
     *querySelectorAll-
    Selects all elements that match a CSS selector.
    Returns a NodeList (static list, can use forEach).
2.  How do you **create and insert a new element into the DOM**?
    Ans: 1. Create element → document.createElement("tag"). 2. Add text/attributes → element.textContent, element.className, etc. 3. Insert into DOM → appendChild() or insertBefore().
    Example:
    let newDiv = document.createElement("div");
    newDiv.textContent = "Hello World!";
    newDiv.className = "box";

            document.body.appendChild(newDiv);

3.  What is **Event Bubbling** and how does it work?
    Ans: \*Event bubbling = when an event happens on an element, it first runs on
    that element, then moves up the DOM tree (parent → ancestor → document).

Example:
    Clicking a button inside a <div> will trigger the button’s event, then the div’s event, then higher levels. 
4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event Delegation = attaching an event listener to a parent element instead 
     of each child, and using event bubbling to detect which child was clicked.
Example:
        document.getElementById("list").addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            console.log("Clicked:", e.target.textContent);
        }
        });     
Useful because:
        * Improves performance (fewer listeners).
        * Works for dynamically added elements.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: 
        *preventDefault() -> Prevents the default browser action (e.g., stop a link from navigating, stop form from submitting).

        *stopPropagation() -> Prevents the event from bubbling up (or capturing down) the DOM, so parent handlers won’t run.
