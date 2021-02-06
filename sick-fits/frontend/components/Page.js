import Header from './Header';

export default function Page({ children }) {
    return (
        <div>
            <Header></Header>
            <h2>This is Page Component</h2>
            {children}
        </div>
    );
}
