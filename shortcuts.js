/*
Normal
!Heavily Used
?Frequent
*Less Used
TODO
//Useless TODO:


TODO FUTURE EXTENCION: VSCODE-SPOTIFY


!DO IT
TODO ||| LEARN AND USE EMMET SHORTCUTS
TODO ||| LEARN ALSO HOW TO MAKE CUSTOM EMMET SHORTCUTS AND DO IT
!DO IT

! Emmet shortcut ideas:

! -write "printme" and an emmet shortcut comes up which creates the function calling for leetcode,
! for javascript js end and python py end.

Most useful keyboard shortcuts VSCODE


----------------------CURSOR----------------------

!Add Cursor Above/Below - Ctrl + Alt + up/downArrow

!Add Cursor To Line Ends - Shift + Alt + I

!Add Cursor To Next Found Match - Ctrl + D

!Move Last Selection To Next Found Match - Ctrl + K + Ctrl + D

?Select All Occurences Of Current Selection - Ctrl + Shift + L

?Column Selection - Ctrl + Shift + Alt + Arrows

?Undo Last Cursos Operation - Ctrl + U

*Select All Results Of A Find Operation - Alt + Enter

!Shrink / Expand Selection - Shift + Alt + Left / Right


	-------------------------NAVIGATION--------------------

	*Move to previous/next mouse area - ALT + Left/RightArrow

	*Show All Symbols In Workspace - Ctrl + T (marked/selected area only)

	*Show Refrences - Shift + F12

	*Global Find - Ctrl + Shift + F

	?Split View Change View - Ctrl + 1, Ctrl + 2...

	!Move Editor Left / Right - Ctrl + Shift + PageUp / PageDown

	!Open Previous / Next Editor - Ctrl + PageUp / PageDown

    !Move To Start / End Of Line - Home / End

    *Go To Beginning / End Of File - Ctrl + Home / End

    ?Scroll Line Up / Down - Ctrl + Up / Down

    ?Scroll Page Up / Down - Alt + PgUp / PgDn




-------------------FOLDING--------------

?Toggle fold - Ctrl + K + Ctrl + L

!Fold All - Ctrl + K + Ctrl + 0

!Unfold All - Ctrl + K + Ctrl + J



-----------------LINES-----------------

!Delete Line - Ctrl + Shift + K

!Duplicate Line - Shift + Alt + Up/DownArrow

*Join Lines - Ctrl + Shift + J

!Move Lines Up/Down - Alt + Up/DownArrow

!Select Line - Ctrl + L

?Go To Specific Line - Ctrl + G

*Trim Trailing Whitespace - Ctrl + K + Ctrl + X



-----------------CHANGE IN SPACE-----------------

?Toggle Terminal - Ctrl + J

!Toggle Sidebar - Ctrl + B

!Split Editor - Ctrl + | (Pipe)

!Zen Mode - Ctrl + K + Z


-----------------COMMENTS-----------------

!Comment Entire Line - Ctrl + '

?Add Comment - Shift + ALt + A


-----------------META-----------------

?Go to File - Ctrl + P

?Command Palette - Ctrl + Shift + P

?Save All - Ctrl + K + S

*Toggle Word Wrap - Alt + Z


-----------------EXTENSIONS-----------------


!Insert numbers - Ctrl + Alt + N


-----------------WINDOWS-----------------


*Quick Link Meny - Windows + X

!File Explorer - Windows + E

!Program Search - Alt + Spacebar

!Minimize Window - Windows + DownArrow

!Maximize Window - Windows + UpArrow

! Minimize All Windows - Windows + M


-----------------SEARCH ENGINE-----------------


!Switch To Left Tab - Ctrl + Tab

!Switch To Right Tab - Ctrl + Shift + Tab


--------------MOUSE--------------


!Right Click - Press Touchpad 2 Fingers

!Windows Search - Press Touchpad 3 Fingers

*Notifications - Press Touchpad 4 Fingers


-----------------POWERTOYS-------------------------


? Change FancyZones - Shift + Win + Ø (not zero but o with I)

? Set Window In FancyZone - Shift While Dragging Window

! ColorPicker - Shift + Win + C

? Pin App On Top - Ctrl + Win + T

* Find Mouse - Shake Mouse (LeftCtrl + LeftCtrl Deactivated)

!Power Rename - Mark And Right Click Files For Rename

!Screen Ruler - Shift + Win + M

!Text Extractor - Shift + Win + T


	------POWER SEARCH------
	WHY USE POWER SEARCH?

	- Able To Do Simple Mathematical Operations

	- Find Week of date

	- Convert Units


	!Power Search Run - Alt + Space

	!Hide Power Search - Esc


		---COMMANDS----

		! Calculator - =

		* File Searching - ?

		* History - !!

		? Installed programs - .

		// ? Office Files - o:

		* Time Zone - & + "Country"

		? Unit Converter - %% (10 ft in m)

		? URI-Handler - // (learn.microsoft.com)

		! Web Search - ??

		* Visual Studio Code - {

			------TIME AND DATE-----

			? Time And Date - )

			* Current Time And Date (With Different Formats) - ) Time And Date

			? Calendar Week - ) Calendar Week::10/20/2022


			----------SHELL COMMANDS-----------
			//!Shell Command - >
			!Learn linux commands instead!



----------------LINUX (BASH COMMANDS)--------------------


!------List Files----------

! List All Files And Directories In Current Directory - ls

? -R :  List Files In Sub-directories Aswell

! List Directory Tree - tree directory

!------Directory-------------

! Navigate to root directory - cd /

! Navigate to HOME directory - cd OR cd ~

? Find Path Of Current Working Directory - pwd


!------Create, Change And Read Files (cat)---------

! CTRL + D - SAVES TEXT WRITTEN WITH cat

! Create A New Empty File - touch filename.filetype

? Create A New File (And Write) - cat > filename.filetype

? Read A File - cat filename.filetype

* Read A File, Reverse Order - tac filename.filetype

? Change All Text In File - echo "text" > text.txt

? Append Text To File - echo "text" >> text.txt


?---------COPY FILES AND DIRECTORIES (cp)----------


? Copy File(s) To Sub-Directory - cp file (file file file) file-directory

! Copy File Content To File In Same Directory - cp file1 file2

! Copy Entire Directory - cp -R Directory/ToBe/Copied Directory/ToBe/Copied/To


?-------MOVE OR RENAME FILES/DIRECTORIES----------

(Current Directory)
? Rename A File - mv old_filename new_filename

? Move A File - mv filename Path/To/New/Directory


?------------Directories------------


! Create Directory - mkdir directoryfirst/directorsecond
 -p or -parents : Create A Directory Between Directories : music/2020/other creates 2020
 Also Creates Multiple Direcrories 1/2 Creates 1 And 2

 -v Prints A Message For Each Created Directory

! Create Directory With Multiple Subdirectories and Subdirectories With Subdirectories - mkdir -p htg/{articles/{new,rewrites},images,notes,done}
//?mkdir -p directory/{sub1, 2, 3, 4, 5, ...}


! Remove Empty Direcotry - rmdir direcotry
-p : Remove Direcotry And Ancestors (rmdir -p a/b/c removes a, b, c)


---------------FILES---------------------


! Remove Files Within Directory - rm filename : Multiple - rm file1 file2 file3 :

? Remove Files With Certain Filetyp - rm *.txt

-r : Delete Directory And All Files Within
-d : Works Just Like rmdir
-i : Confirmation For Deletion


? File Size - du

? Archive File/Directory - tar -cvf name.tar Directory/path OR Directory/File name

? Extract Archived File/Directory - tar xvf ----------||--------------------------


-------------------LOCATE FILES AND IN FILES------------------


? Locate File From Database System - locate filename (word1*word2 For Multiname File)

? Locate File Within Specific Directory - find

? Locate Words In File - grep word file.tupe


---------------TROUBLESHOOTING----------------


? Check If Network And Host Is Reachable - ping google.com


-------------LOOPS-------------------


!for x in (1..10); do (SOMETHING $x); done


------------------------------

* Math- expr

mnt/c

mv (MOVE/RENAME)

cp (COPY)

rm (REMOVE)

nano (TEXT EDITOR FILER MAN KAN BRUKE NOTEPAD TIL)

Ctrl + X (OM Q IKKE FUNGERER, BRUKES TIL Å EXITE)


ADMIN (su OR sudo or sudo bash (makes new terminal in admin))

apt-get update (UPDATE REPOSITORY (GET LIST OF UPDATES))

(TRENGER BARE BRUKE APT)
apt-get upggrade (UPGRADES)

apt-get install (INSTALL APPS)

more  press h for help


python3 twitter.py >vg.html (DET SOM HADDE KOMMET I TERMINAL)

python3 twitter.py >vg.html >> appender

-s symbolsk link

ls -la

man (MANUAL)

!!!!!!!!DO NOT USE!!! SLETTER ALTTTT!! rm -rf (DO NOT USE)

*/