import {EnvelopeIcon, GithubLogoIcon, LinkedinLogoIcon} from "@phosphor-icons/react/dist/ssr";

const socialClasses = "bg-zinc-50 hover:bg-zinc-800/80 hover:text-white p-2 dark:bg-zinc-800 dark:text-white rounded-md dark:hover:bg-zinc-100 dark:hover:text-black transition-colors drop-shadow-lg transition-colors";

const Socials = (): JSX.Element => (
	<div className="flex justify-center gap-6">
		<a href="mailto:phil.antiporda21@gmail.com" className={socialClasses}>
			<EnvelopeIcon size={24} />
		</a>
		<a href="https://www.linkedin.com/in/philantiporda/" target="_blank" referrerPolicy="no-referrer" className={socialClasses}>
			<LinkedinLogoIcon size={24} />
		</a>
		<a href="https://github.com/philrussel21" target="_blank" referrerPolicy="no-referrer" className={socialClasses}>
			<GithubLogoIcon size={24} />
		</a>
	</div>
);

export default Socials;
