export default function UserProfile({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 >Profile Page</h1>
            <hr/>
            <p className="text-4xl">Welcome to your profile!<span className="p-2 rounded bg-orange-500 text-black ">{params.id}</span></p>
        </div>
    );
}