

export default function SupplementsPage({categories}) {

    return (
        <>
        <ul class="navbar justify-content-center bg-light">
            {categories.map(cat => <li>{cat}</li>)}
            {/* <li class="nav-item btn btn-light">pill</li>&nbsp;&nbsp; */}
         
        </ul>    
        <h1>Supplements</h1>
        </>
    );

}