export default function Meme() {

    return (
    <main>
        <form action="/action_page.php" className="form">
            <input type="text" className="form--input" placeholder="top text"/>
            <input type="text" className="form--input" placeholder="bottom text"/>
            <button className="form--button">Get a new meme image 🖼</button>
        </form>
    </main>
    )
}