window.addEventListener('load', () => {

	//model
	new Vue({
		el: "#vmodel",
		data: {
			message: "Hello world",
			selectedVal: "",
			isSelected: false
		},
		methods: {
			log() {
				console.log(this.message);
			},
			setValue() {
				this.message = 'World World';
				this.selectedVal = "bar";
				this.isSelected = true;
			}
		}
	});
	//cloak
	setTimeout(() => {
		new Vue({
			el: "#vcloak",
			data: {
				users: [{name: "Gürsel"}, {name: "Gamze"}]
			}
		});
	}, 3000);
	//slot
	Vue.component('v-select', {
		template: `
			<select>
				<slot></slot>
			</select>
		`
	});
	Vue.component('v-option', {
		props: [ 'value' ],
		template: `
			<option>{{value}}</option>
		`
	});
	new Vue({
		el: "#slots"
	});
	//nextTick
	new Vue({
		el: "#nextTick",
		data: {
			message: "Hello !"
		},
		methods: {
			change(){
				this.message = "hello world !!";
				console.log(document.querySelector('#nextTick').innerText);

				//dom update bittiği sırada kullanılabilir
				this.$nextTick(() => {
					console.log(document.querySelector('#nextTick').innerText);
				});
			}
		}
	});
	//modifiers
	Vue.config.keyCodes.a = 65;
	new Vue({
		el:"#modifiers",
		methods: {
			log() {
				console.log("foo");
			}
		}
	});
	//filters

	Vue.filter('withTax', (price) => {
		return `${(price * 1.18).toFixed(2)} tl`;
	});

	new Vue({
		el:"#filters",
		data: {
			name: 'logitect sound',
			price: 25
		},
		filters: {
			uppercase(text) {
				return text.toUpperCase();
			}
		}
	});

});