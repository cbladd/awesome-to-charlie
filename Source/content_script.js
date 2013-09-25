walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bAwesome\b/g, "Charlie");
	v = v.replace(/\bawesome\b/g, "charlie");
	v = v.replace(/\bBadass\b/g, "Charlie");
	v = v.replace(/\bbadass\b/g, "charlie");
	v = v.replace(/\bthe shit\b/g, "charlie");
	v = v.replace(/\bThe Shit\b/g, "Charlie");
	
	textNode.nodeValue = v;
}


