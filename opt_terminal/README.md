# commands which you may find usefule

```bash
# it will create some_dir and change current directory to newly created dir.
mkdir some_dir && cd$_   

# to open file content within terminal
cat file.ext
less file.ext
more file.ext

# does parent/child directory
mkdir -p myproject/src/components

#-a: This option stands for "archive mode" and is used to preserve file permissions, ownership, timestamps, and other attributes during the copy.
#-v: This option stands for "verbose" and will display the files being copied.
#--exclude='node_modules': This option tells rsync to exclude the node_modules directory during the copy.
#--exclude='.git': This option tells rsync to exclude the .git directory during the copy.
#source_directory/: This is the source directory from which you want to copy files. Make sure to include the trailing slash (/) after the directory name to copy its contents rather than the directory itself.
#destination_directory: This is the destination directory where the files will be copied.


rsync -av --exclude='node_modules' --exclude='.git' source_directory/ destination_directory


# remove all from current dir/
rm -rf ./*

```

```bash

# runs automaticaly when app.js changes
npm install -g nodemon
nodemon app.js
```
