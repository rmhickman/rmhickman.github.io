var allBlogs = [];

var blog1 = {
	blogName: "Blog 1",
	date: "Date",
	entry: "These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course.",
}

var blog2 = {
	blogName: "Blog 2",
	date: "Date",
	entry: "These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course.",
}

var blog3 = {
	blogName: "Blog 3",
	date: "Date",
	entry: "These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course.",
}

var blog4 = {
	blogName: "Blog 4",
	date: "Date",
	entry: "These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course.",
}

var blog5 = {
	blogName: "Blog 5",
	date: "Date",
	entry: "These entries should be themed around your journey into development. As you discover new tricks, tips and tools, write about your discovery. Write about what you have tried and why it did or did not work. These entries will be helpful for you as you speak with other members of the development community (and will be helpful when you are frustrated - look how far you've come). For now, you can use placeholder text, but this should be your place to continue writing throughout this course.",
}

allBlogs.push(blog1);
allBlogs.push(blog2);
allBlogs.push(blog3);
allBlogs.push(blog4);
allBlogs.push(blog5);

console.log("All of my blogs: ", allBlogs)
var items = document.getElementById("items");
for (var i = 0; i < allBlogs.length; i++){
	var currentBlog = allBlogs[i];

	var domString = "";

	domString +=  '<section class="blog">'
	domString +=  '<div class="item-1 item">'
	domString +=  '<div class="title">'
	domString +=  '<h4>'+currentBlog.blogName+'</h4>'
	domString +=  '<div class="date">'
	domString +=  '<h2>'+currentBlog.date+'</h2>'
	domString +=  '<div class="entry">'
	domString +=  '<p>'+currentBlog.entry+'+</p>'
	domString +=  '</div>'
	domString +=  '</div>'
	domString +=  '</section>'

	console.log("Dom String from for loop", domString)
	items.innerHTML += domString;
}
