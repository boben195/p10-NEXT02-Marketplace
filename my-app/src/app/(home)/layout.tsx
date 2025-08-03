
interface Props {
    children: React.ReactNode;
}


const Layout = ({children}: Props) => {
    <div>
        <h1 className="text-2xl font-bold mb-4">Home Layout</h1>
        {children}
    </div>
}

export default Layout;