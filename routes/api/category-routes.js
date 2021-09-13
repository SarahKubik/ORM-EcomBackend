// Dependencies instantiating the router object of Express
const router = require('express').Router();

// Import the model
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
try {
  const categoryData = await Category.findAll({
     include: [
      {
        model: Product,
        as: 'products'
      }
    ]
  });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: 'products'
        }
      ]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // create new category
  //  req.body or response would be defined as { category_name: "Shorts" }

router.post('/', (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // update a category by its `id` value
router.put('/:id', (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


