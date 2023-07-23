function App({index, setIndex}) {
  return (
    <footer>
        <div className={`footer-element ${index === 0 ? 'violet': ''}`} onClick={() => setIndex(0)}>
        <img src="https://ik.imagekit.io/hbzknb1hm/home_1.png?updatedAt=1690120755550" alt="" />
        </div>
        <div className={`footer-element ${index === 1 ? 'violet': ''}`} onClick={() => setIndex(1)}>
        <img src="https://ik.imagekit.io/hbzknb1hm/letter.png?updatedAt=1690120983552" alt="" />
        </div>
        <div className={`footer-element ${index === 2 ? 'violet': ''}`} onClick={() => setIndex(2)}>
        <img src="https://ik.imagekit.io/hbzknb1hm/radio.png?updatedAt=1690120983463" alt="" />
        </div>
        <div className={`footer-element ${index === 3 ? 'violet': ''}`} onClick={() => setIndex(3)}>
        <img src="https://ik.imagekit.io/hbzknb1hm/user.png?updatedAt=1690120983785" alt="" />
        </div>
        <div className={`footer-element ${index === 4 ? 'violet': ''}`} onClick={() => setIndex(4)}>
        <img src="https://ik.imagekit.io/hbzknb1hm/visoin.png?updatedAt=1690121666429" alt="" />
        </div>
    </footer>  
  )
}

export default App;