const BlogModel = require('../models/blog');


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find(); // Fetch all blogs
        res.render('blogs/allBlogs', { // Render only the allBlogs view
            blogs,
            title: 'All Blogs',
            user: req.user // Pass user information as well
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).send("Server Error");
    }
};

const defaultRoute = async (req, res) => {
    const blogs = await BlogModel.find();
    res.render('layout', { title: 'blog', blogs, user: req.user });

};
const addForm = (req, res) => {
    console.log("add form in");
    res.render('blogs/addBlogs.ejs');
}


const getMyBlogs = (req, res) => {


    BlogModel.find({ author: req.user._id })
    .then((myBlogs) => {
        res.render('blogs/myBlogs', { myBlogs, user: req.user });
    })
    .catch((err) => res.status(500).send(err));
};


// Add a new blog
const addBlog = (req, res) => {

    console.log('add blog in')
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBlog = new BlogModel({ title, content, image, author: req.user._id });
    newBlog.save()
        .then(() => res.redirect('/'))
        .catch((err) => res.status(500).send(err));
};
const editForm = async (req, res) => {
    const { id } = req.params;

    const blog = await BlogModel.findById(id); // Fetch the blog by ID
    if (!blog) {
        return res.status(404).send('Blog not found');
    }
    // Render the edit form with the blog data
    res.render('blogs/editBlogs', { blog }); // Pass the blog to the template

};

const editBlog = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;

    BlogModel.findById(id)
        .then((blog) => {
            if (!blog) {
                return res.status(404).send('Blog not found');
            }

            // Check if the logged-in user is the author
            if (blog.author.toString() !== req.user._id.toString()) {
                return res.status(403).send('Unauthorized action');
            }

            blog.title = title;
            blog.content = content;
            if (image) blog.image = image;

            return blog.save();
        })
        .then(() => res.redirect('/'))
        .catch((err) => res.status(500).send(err));
};

// Delete a blog  
  const deleteBlog = (req, res) => {
    const { id } = req.params;

    BlogModel.findById(id)
        .then((blog) => {
            if (!blog) {
                return res.status(404).send('Blog not found');
            }

            // Check if the logged-in user is the author
            if (blog.author.toString() !== req.user._id.toString()) {
                return res.status(403).send('Unauthorized action');
            }

            return BlogModel.findByIdAndDelete(id);
        })
        .then(() => res.redirect('/'))
        .catch((err) => res.status(500).send(err));
};




module.exports = { getAllBlogs, getMyBlogs, addBlog, editForm, editBlog, deleteBlog, defaultRoute, addForm }