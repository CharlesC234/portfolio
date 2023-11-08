
// Util packages
import Icon from '../utils/icon';

// Define the props for the CopyBlock component
interface CopyBlockProps {
	containerClass: string;
	subtitle: string;
	title: string;
	copy: string;
}

// This will return the copy block component
export default function RecBlock({
									  containerClass,
									  subtitle,
									  title,
									  copy,
								  }: CopyBlockProps) {
	// Return the copy block component
	return (
		<div className={containerClass}>
            <span>
			<h3>{title}</h3>
            <h4 style={{fontSize: 16, marginTop: 5, textTransform: 'initial'}}>{subtitle}</h4>
            </span>
			<p>{copy}</p>
		</div>
	);
}
