import { Binding } from "./binding/Binding.js";

export class Progress {
	/**@type {Number}*/ max = 1;
	/**@type {Number}*/ cur = 0;

	/**@type {HTMLElement}*/ dom;




	render() {
		const blocker = document.createElement('div'); {
			this.dom = blocker;
			blocker.classList.add('xh--prog--blocker');
			const content = document.createElement('div'); {
				content.classList.add('xh--prog--content');
				const title = document.createElement('div'); {
					title.classList.add('xh--prog--title');
					title.textContent = 'Preparing Chat Export...';
					content.append(title);
				}
				const outer = document.createElement('div'); {
					outer.classList.add('xh--prog--outer');
					const inner = document.createElement('div'); {
						inner.classList.add('xh--prog--inner');
						Binding.create(this, 'cur', inner.style, 'width', v=>`${v/this.max*100}%`);
						outer.append(inner);
					}
					const label = document.createElement('div'); {
						label.classList.add('xh--prog--label');
						Binding.create(this, 'cur', label, 'textContent', v=>`${v} / ${this.max} (${Math.round(v/this.max*100)}%)`);
						outer.append(label);
					}
					content.append(outer);
				}
				blocker.append(content);
			}
			document.body.append(blocker);
		}
	}
	remove() {
		this.dom?.remove();
	}
}