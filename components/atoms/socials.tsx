import {EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon} from "@phosphor-icons/react/dist/ssr";

const socialClasses = "p-1.5 bg-zinc-800 text-white rounded-md hover:bg-zinc-100 hover:text-black transition-colors";

const Socials = (): JSX.Element => (
	<div className="flex justify-center gap-6">
		<a href="mailto:phil.antiporda21@gmail.com" className={socialClasses}>
			<EnvelopeIcon size={20} />
		</a>
		<a href="https://www.linkedin.com/in/philantiporda/" target="_blank" referrerPolicy="no-referrer" className={socialClasses}>
			<LinkedinLogoIcon size={20} />
		</a>
		<a href="https://github.com/philrussel21" target="_blank" referrerPolicy="no-referrer" className={socialClasses}>
			<GithubLogoIcon size={20} />
		</a>
	</div>
);

export default Socials;
