# Product API

## Product

### Create
method **POST** to create Product

URL: /api/product/

Example

```json
{
	"name": "product name",
	"brand": "brand slug",
	"types": "types slug",
	"description": "product description",
	"price": 20,
	"picture": "picture URL",
	"date" : {
		"year": 2016,
		"month": 10,
		"day": 10
	},
	"amount": 20,
	"size": ["size slug", "size2 slug"],
	"color": ["color1 slug", "color2 slug", "color3 slug"],
	"is_available": true,
	"is_discount": false,
	"discountPercent" : 20
}
```


### Search
method **GET** to retrieve data

***All product*** URL: /api/product/

***By name*** URL: /api/product/&lt;productName-slug>

***By size*** URL: /api/product/size/&lt;productSize-slug>

***By type*** URL: /api/product/type/&lt;productType-slug>

***By brand*** URL: /api/product/brand/&lt;productBrand-slug>


### Update
method **PUT** for edit product data

URL: /api/user/product/&lt;product-slug>

send some field for update

example: update amount and brand

```json
{
  "amount": 20,
  "brand": "adidas"
}
```


### Delete
method **DELETE** for delete product

URL: /api/user/product/&lt;product-slug>
