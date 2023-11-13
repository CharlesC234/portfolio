
const Custom404   = dynamic(import ( "../src/components/blocks/errors/custom404"));
import Title404 from "./title.404";
import dynamic from "next/dynamic";

export default function Notfound() {
    return (
        <div style={{height: 900}}>
            <h1 className="mt-auto mx-auto mt-5" style={{textAlign: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 150}}>404 - Page Not Found</h1>
        </div>
    );
};