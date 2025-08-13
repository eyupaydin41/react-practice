import Counter from "../components/Counter";
import Form from "../components/Form";
import Weather from "../components/Weather";
import ToDo from "../components/Todo";

export default function HomePage() {
    return (
        <div className="HomePage" style={{ padding: '10px', textAlign: 'center' }}>
            <Weather />
            <Form />
            <Counter />
            <ToDo />
        </div>
    );
}