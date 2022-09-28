import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Dragon-Hatcher/Utilitarianism.git', // Update to point to your repository
		user: {
			name: 'Daniel James', // update to use your name
			email: 'danieldragonhatcher@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
