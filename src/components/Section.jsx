// add proxy props with ...props (all other props merged into one object)
// merge with ...props argument --> spread with <section {...props}
export default function Section ({title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}