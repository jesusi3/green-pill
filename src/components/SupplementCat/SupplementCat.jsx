

export default function SupplementCat({categories, activeCat, setActiveCat}) {
    const cats = categories.map(cat =>
        <li
          key={cat}
          className={cat === activeCat ? "nav-item btn btn-light text-success"  : "nav-item btn btn-light"}
          onClick={() => setActiveCat(cat)}
        >
          {cat}
        </li>
      );


    return (
        <>
          <div className="justify-content-center">
            <ul className="navbar justify-content-center bg-light">
                {cats}
            </ul>    
            <h1 >Supplements</h1>
        </div>
        </>
    );

}