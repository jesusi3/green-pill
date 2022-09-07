

export default function EquipmentCat({categories, activeCat, setActiveCat}) {
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
        <ul className="navbar justify-content-center bg-light">
            {cats}
        </ul>    
        <h1>Equipment</h1>
        </>
    );

}